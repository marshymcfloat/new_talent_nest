"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  label: string;
  placeholder: string;
  options: string[];
  value: string[];
  onChange: (newValue: string[]) => void;
}

export function MultiSelectWithSuggestions({
  label,
  placeholder,
  options,
  value,
  onChange,
}: Props) {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (inputValue) {
      const availableOptions = options.filter((opt) => !value.includes(opt));
      const filtered = availableOptions.filter((opt) =>
        opt.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5)); // Limit to 5 suggestions
    } else {
      setSuggestions([]);
    }
  }, [inputValue, options, value]);

  const handleAdd = (item: string) => {
    if (!value.includes(item)) {
      onChange([...value, item]);
    }
    setInputValue("");
    setSuggestions([]);
  };

  const handleRemove = (itemToRemove: string) => {
    onChange(value.filter((item) => item !== itemToRemove));
  };

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="flex flex-wrap gap-2 p-2 rounded-md border min-h-[48px]">
        <AnimatePresence>
          {value.map((item) => (
            <motion.div
              key={item}
              layout
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <Badge
                variant="secondary"
                className="flex items-center gap-2 text-sm py-1"
              >
                <span>{item}</span>
                <button
                  type="button"
                  onClick={() => handleRemove(item)}
                  className="rounded-full hover:bg-gray-500/20"
                >
                  <X size={14} />
                </button>
              </Badge>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="relative">
        <Input
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          autoComplete="off"
        />
        <AnimatePresence>
          {suggestions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full mt-1 z-10 w-full"
            >
              <Card className="max-h-40 overflow-y-auto p-2 shadow-lg">
                <ul className="flex flex-col gap-1">
                  {suggestions.map((s) => (
                    <li
                      key={s}
                      className="p-2 text-sm rounded-md cursor-pointer hover:bg-accent"
                      onClick={() => handleAdd(s)}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
