import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

function LoaderSpinner() {
  return (
    <div className={s.section}>
      <Loader
        type="Circles"
        color="#000"
        height={30}
        width={30}
        timeout={3000}
      />
    </div>
  );
}
export default LoaderSpinner;
