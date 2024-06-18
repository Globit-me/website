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

interface ApprovedButtonProps {
  id: string | null;
  label: string;
  onClick: (id: string | null) => void;
}
const ApprovedButton: React.FC<ApprovedButtonProps> = ({
  id,
  onClick,
  label,
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="mt-2 px-4 py-2 text-white bg-green-700 rounded">
          Aprobar
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-black">
            Confirmar Aprobación
          </AlertDialogTitle>
          <AlertDialogDescription>
            Por favor, revise los datos y confirme {label}.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => onClick(id)}
            className="bg-green-700 hover:bg-green-800"
          >
            Aprobar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ApprovedButton;
