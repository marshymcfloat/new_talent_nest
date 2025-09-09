import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { CreateQuestionForm } from "./CreateQuestionForm"; // Import the new form component

interface CreateQuestionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CreateQuestionButton = ({
  onOpenChange,
  open,
}: CreateQuestionDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl md:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-center capitalize">
            Add a New Question to Your Library
          </DialogTitle>
        </DialogHeader>

        <CreateQuestionForm onSuccess={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateQuestionButton;
