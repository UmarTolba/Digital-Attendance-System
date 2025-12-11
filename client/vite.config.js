// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import os from 'os';

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  
  for (const name of Object.keys(interfaces)) {
    // Skip VirtualBox, VMware, and WSL adapters
    if (name.includes('Virtual') || name.includes('vEthernet') || name.includes('VMware')) continue;

    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        if (iface.address.startsWith('172')) {
          return iface.address;
        }
      }
    }
  }

  // Fallback: If the specific subnet isn't found, pick the first non-internal IPv4
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) return iface.address;
    }
  }
  
  return 'localhost';
}

export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_LOCAL_IP': JSON.stringify(getLocalIP())
  },
  server: {
    host: true, 
    port: 8080
  }
});