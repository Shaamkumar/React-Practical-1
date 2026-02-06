export default function ErrorFallback(error , resetErrorBoundary){
return(
<div>
    <h2> Somthing Went Wrong</h2>
    <p> {error?.message}</p>
</div>

);

}