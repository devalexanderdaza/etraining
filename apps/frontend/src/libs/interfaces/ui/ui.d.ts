export type Severity = "error" | "warning" | "info" | "success";

interface Alert {
  id: string;
  message: string;
  severity: Severity;
  onClose?: () => void;
}

interface Dialog {
  open: boolean;
  title: string;
  message: string;
  children: JSX.Element;
}

interface DrawerState {
  open: boolean;
}

interface UIState {
  drawer: DrawerState;
  dialog: Dialog;
  darkMode: boolean;
  alerts: Alert[];
}

interface UISlice {
  drawer: DrawerState;
  alerts: Alert[];
  dialog: Dialog;
  darkMode: boolean;
  setDrawer: (drawer: DrawerState) => void;
  setDialog: (dialog: Dialog) => void;
  closeDialog: () => void;
  setDarkMode: (darkMode: boolean) => void;
  newAlert: (alert: Alert) => void;
  removeAlert: (id: string) => void;
}

export { Alert, DrawerState, Dialog, UIState, UISlice };