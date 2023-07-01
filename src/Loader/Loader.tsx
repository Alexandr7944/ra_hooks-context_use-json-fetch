import classes from './Loader.module.css';

const Loader = () => {
  return(
    <div className={classes.container}>
      <h3>
        Идет загрузка...
      </h3>
      <div className={classes.ldsSpinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    
  )
};

export default Loader;