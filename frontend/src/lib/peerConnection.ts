import Peer from "peerjs";
import type { DataConnection } from "peerjs";

export default class PeerConnection {

    private peer: Peer;
    private connection?: DataConnection;

    constructor(hostId: string, clientId: string | null, callback: (data: any) => void, onError: (err: any) => void) {
        this.peer = new Peer(hostId);
        this.peer.on('open', (peerId) => {
            console.log('My peer ID is ' + peerId);
            if (clientId != null) {
                this.connect(clientId, callback, onError)
            }
        });
        this.peer.on("connection", (connection) => {
            connection.on('data', (data: any) => {
                console.log('Received data: ' + data);
                callback(data);
            });
        });
    }

    private connect(peerId: string, callback: (data: any) => void, onError: (err: any) => void) {
        console.log('Connecting to peer: ' + peerId);
        this.connection = this.peer.connect(peerId);

        this.connection.on('open', () => {
            console.log('Connected to peer: ' + peerId);
        });

        this.connection.on('data', (data: any) => {
            console.log('Received data: ' + data);
            callback(data);
        });

        this.connection.on('close', () => {
            console.log('Connection closed');
            onError('Connection closed');
        });

        this.connection.on('error', (err: any) => {
            console.error('Connection error:', err);
        });
    }

    send(newMessage: any) {
        if (this.connection && this.connection.open) {
            this.connection.send(newMessage);
        } else {
            console.error('Connection is not open');
        }
    }
}