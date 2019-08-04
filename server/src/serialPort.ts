import SerialPort from "serialport";

export class SerialPortListener {
  public init(socketIO: SocketIO.Server) {
    const serialPort = new SerialPort(process.env.SERIAL_PORT, {
      baudRate: 9600,
    });

    serialPort.on("error", (err: Error) => {
      // tslint:disable-next-line:no-console
      console.log("Serial port error:", err);
    });

    const Readline = SerialPort.parsers.Readline;
    const parser = serialPort.pipe(new Readline({ delimiter: "\r\n" }));
    parser.on("data", (data: string) => {
      const res = data
        .split(",")
        .filter(Boolean)
        .map((val, i) => {
          return i ? parseInt(val) : val;
        });

      if (res.length < 3) {
        return;
      }

      socketIO.emit("data", res);
    });
  }
}
