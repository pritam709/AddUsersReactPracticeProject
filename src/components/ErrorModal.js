import Card from "./Card";
import classes from "./Error.module.css"
const ErrorModal=(props)=>{

    return <div  className={classes.background}>
        <div className={classes.backdrop}>
    <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
       <div className={classes.content}> <p>{props.msg}</p></div>
        <footer className={classes.actions}>
            <button onClick={props.onConfirm}>okay</button>
        </footer>
    </Card>
    </div>
    </div>

}

export default ErrorModal;
