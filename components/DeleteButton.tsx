// components/DeleteButton.tsx
"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash2, Loader2 } from "lucide-react"; // Import Loader2
import { Button } from "./ui/button";

const DeleteButton = ({
  onDelete,
  title,
  isPending = false, // Add isPending prop with a default value of false
}: {
  title: string;
  onDelete?: () => void;
  isPending?: boolean; // Define the type for isPending
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        asChild // Use asChild to pass the trigger behavior to the Button
      >
        <Button
          variant="ghost" // Use a button for accessibility and consistent styling
          size="icon"
          className="h-8 w-8 text-red-500 hover:text-red-600"
          aria-label={`Delete ${title}`}
          disabled={isPending} // Disable the trigger button if pending
        >
          {isPending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Trash2 size={16} />
          )}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure to delete "{title}"?</AlertDialogTitle>{" "}
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this item
            and it cannot be recovered.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>{" "}
          {/* Disable cancel if pending */}
          <AlertDialogAction onClick={onDelete} disabled={isPending}>
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteButton;
