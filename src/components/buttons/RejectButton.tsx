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

interface RejectButtonProps {
  id: number;
  label: string;
  onClick: (id: number) => void;
}

const RejectButton: React.FC<RejectButtonProps> = ({ id, onClick, label }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="mt-2 px-4 py-2 text-white bg-red-700 rounded">
          Rechazar
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-black">
            Confirmar Rechazo
          </AlertDialogTitle>
          <AlertDialogDescription>
            Por favor, revise los datos y confirme rechazo de {label}.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => onClick(id)}
            className="bg-red-700 hover:bg-red-800"
          >
            Rechazar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default RejectButton;
