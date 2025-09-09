import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CreateJobForm } from "./CreateJobForm"; // Import our new, powerful form

interface CreateJobDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

const CreateJobButton = ({ open, onOpenChange }: CreateJobDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            New Job Posting
          </DialogTitle>
        </DialogHeader>

        <div className="px-1 py-4">
          <CreateJobForm onSuccess={() => onOpenChange(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateJobButton;
