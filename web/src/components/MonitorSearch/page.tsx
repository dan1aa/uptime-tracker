import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Search } from 'lucide-react'

interface MonitorSearchProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

function MonitorSearch(props: MonitorSearchProps) {

  const { value, onChange, className } = props;


  return (
    <div className={`h-fit flex-1 flex items-center rounded-lg border border-gray-500/15 px-3 ${className}`}>
      <Search className="h-4 w-4 text-zinc-400 shrink-0 mr-2" />
      <Input 
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Enter a name..." 
        className="h-10 w-full border-none shadow-none focus-visible:ring-0 bg-transparent px-0 text-sm"
      />
    </div>
  )
}

export default MonitorSearch