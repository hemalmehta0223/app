const BatchDetailTabPanel = ({ index, value, children }) => {
  return index === value && <>{children}</>;
};

export default BatchDetailTabPanel;
