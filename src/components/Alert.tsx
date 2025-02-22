import { useEffect } from "react";
import { Toaster, toast } from "sonner";

const Alert = ({ message }: { message: string }) => {
  useEffect(() => {
    toast.error(`Error : ${message}`,{duration:3000});
  }, [message]);

  return (
    <>
      <Toaster position="top-right" expand={true} richColors />
    </>
  );
};

export default Alert;
