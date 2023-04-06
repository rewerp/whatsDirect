import { useContext } from "react";
import { GlobalContext } from "../contexts/globalContext";


export function useGlobal() {
  const global = useContext(GlobalContext);

  return global;
}