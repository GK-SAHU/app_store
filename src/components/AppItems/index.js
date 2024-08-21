import './index.css'

const AppItems = (props) => {
  const { appDetailc } = props;
  const { imageUrl, appName } = appDetailc;

  return (
    <li className="app-item">
      <img src={imageUrl} alt={appName} className="app-image"/>
      <p className="app-name">{appName}</p>
    </li>
  );
};
export default AppItems;
