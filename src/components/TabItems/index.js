import './index.css'

const TabItems = (props) => {
  const { tabDetailc, isActive, setActiveTab } = props;
  const { tabId, displayText } = tabDetailc;

  const onClickButoon = () => {
    setActiveTab(tabId);
  };

  const tabBtnClassName = isActive ? "tab-button active" : "tab-button";

  return (
    <li className="tab-item">
      <button type="button" onClick={onClickButoon} className={tabBtnClassName}>
        {displayText}
      </button>
    </li>
  );
};
export default TabItems;
