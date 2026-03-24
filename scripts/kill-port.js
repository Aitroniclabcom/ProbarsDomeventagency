import { execSync } from 'child_process'

try {
  const output = execSync('netstat -ano').toString()
  const lines = output.split('\n')
  const pids = new Set()
  
  for (const line of lines) {
    if (line.includes(':3004')) {
      const parts = line.trim().split(/\s+/)
      const pid = parts[parts.length - 1]
      if (pid && pid !== '0' && !isNaN(Number(pid))) {
        pids.add(pid)
      }
    }
  }
  
  for (const pid of pids) {
    try {
      execSync(`taskkill /PID ${pid} /F`)
      console.log(`Killed PID ${pid}`)
    } catch {}
  }
} catch {}
