import { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";
export default function () {
  const toast = useToast();
  // export toast function

  return toast;
}
