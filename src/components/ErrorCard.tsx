
import  {
    Card,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'


const ErrorCard = () => {
  return (
    <Card className="w-[400] shadow-md">
        <CardHeader>
            <CardTitle>Oops! Algo ha salido mal!</CardTitle>
        </CardHeader>
        <CardFooter>
            <span>Volver al Login</span>
        </CardFooter>

    </Card>
  )
}

export default ErrorCard