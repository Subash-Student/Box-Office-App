export default function AppTitle(props){

const {title ="Box Office APP", subtitle ="Are You Looking For Any Movie Or Actor/Actress ?"}=props;

return <div>

<h1>{title}</h1>
<p>{subtitle}</p>

</div>
};