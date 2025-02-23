import EditPostForm from "@/components/EditPostForm";
// import { useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type EditPostModalProps = {
  isOpen: boolean;
  onClose: () => void;
  postData: { title: string; body: string };
};

const EditPostModal = ({ isOpen, onClose, postData }: EditPostModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Modifier l'annonce</DialogTitle>
          <DialogDescription>
            Merci de renseigner tous les champs nécessaires.
          </DialogDescription>
        </DialogHeader>
        <EditPostForm postData={postData} onClose={onClose} />
        <Button onClick={onClose}>Annuler</Button>
      </DialogContent>
    </Dialog>
  );
};

export default EditPostModal;
