import { createContext, useContext, useMemo, useState } from "react";

const FormDataContext = createContext();

const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const formDataObject = useMemo(() => {
    return { formData, setFormData };
  }, [formData, setFormData]);

  return (
    <FormDataContext.Provider value={formDataObject}>
      {children}
    </FormDataContext.Provider>
  );
};

export default FormDataProvider;

export const useFormData = () => {
  const context = useContext(FormDataContext);
  if (context === undefined) {
    throw new Error("useFormData must be used within a FormDataProvider");
  }
  return context;
};
