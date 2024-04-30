import { io } from "socket.io-client";

const URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
const socket = io(URL, { autoConnect: false });

export default socket;