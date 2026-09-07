import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { MonitorStatus, STATUS_CONFIG } from '@/constants/site-status';
import { Button } from '../ui/button';

export type MonitorCardProps = {
    title: string;
    status: MonitorStatus;
    url: string;
    className?: string;
}

function MonitorCard(props: MonitorCardProps) {

  const { title, status, url, className } = props;

  return (
    <Card className={className}>
        <CardHeader>
            <div className='pb-2'>
                <CardTitle>{title}</CardTitle>
            <CardDescription>{url}</CardDescription>
            </div>
            <div className='flex w-full h-fit gap-x-2 items-center'>
                <div className={`w-3 h-3 rounded-full ${STATUS_CONFIG[status].dotClass}`}></div>
                <span>{STATUS_CONFIG[status].message}</span>
            </div>
        </CardHeader>
        <CardContent>
            <div className='flex items-center w-fit h-fit gap-x-2'>
                <Button variant={"default"}>View</Button>
                <Button variant={"destructive"}>Remove</Button>
            </div>
        </CardContent>
    </Card>
  )
}

export default MonitorCard