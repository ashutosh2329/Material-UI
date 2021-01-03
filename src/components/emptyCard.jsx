import React from 'react';
import { Avatar, Card, CardHeader } from '@material-ui/core';

export default function emptyCard(props) {
    return (
        <div>
            <Card>
                <CardHeader>
                    avatar ={
                        <Avatar>

                        </Avatar>
                    }
              </CardHeader>
            </Card>
        </div>
    )
}