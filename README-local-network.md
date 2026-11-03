# ShineX local network preview

## Start the site

Double-click `start-local.bat`, or run this from the project folder:

```powershell
python -m http.server 4173 --bind 0.0.0.0
```

## Open it

- On this computer: `http://localhost:4173`
- On another phone/laptop using the same Wi‑Fi: `http://192.168.1.45:4173`

The LAN address can change when the router reconnects. The launcher prints the current address automatically.

If Windows Firewall prompts for access, allow Python on **Private networks**. Both devices must be connected to the same Wi‑Fi/router; `localhost` only works on the computer running the server.
