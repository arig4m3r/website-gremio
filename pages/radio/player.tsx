import React, { useState, Component } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import YoutubeSearchBox from '../../components/YoutubeSearchBox'
import Youtube from 'react-youtube'
import MusicQueue from '../../components/MusicQueue'
import Pusher from 'pusher-js'
import axios from 'axios'

const pusher = new Pusher('38000fe8ad1be55a3924', {
  cluster: 'sa1',
  forceTLS: true
})

const channel = pusher.subscribe('gremio-website')

// const [rows, setRows] = useState([
//   { id: 1, title: 'Never Gonna Give You Up', videoId: 'dQw4w9WgXcQ', author: 'Ari Rocha' },
//   { id: 2, title: 'Apenas um teste', videoId: '11S5tcT2Tm0', author: 'Ari Rocha' }
// ]);

const opts = {
  height: '390',
  width: '640',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

interface IProps {
}

interface IState {
  rows: {
    id: number,
    title: string,
    videoId: string,
    author: string
  }[];
}

export default class player extends Component<IProps, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      rows: [
        { id: 1, title: 'Never Gonna Give You Up', videoId: 'dQw4w9WgXcQ', author: 'Ari Rocha' },
        { id: 2, title: 'Apenas um teste', videoId: '11S5tcT2Tm0', author: 'Ari Rocha' }
      ]
    };
  }

  nextMusic = () => {
    this.setState({
      rows: this.state.rows.filter(row => row.id != Math.min(...this.state.rows.map(o => o.id)))
    })
  }

  handleVideo = (input: string) => {
    console.log(input)
    axios.post('https://gremioguimaraesrosa.vercel.app/api/addMusic', {
      id: this.state.rows.length != 0 ? Math.max(...this.state.rows.map(o => o.id)) + 1 : 1,
      title: 'Adicionado por moderador',
      videoId: input,
      author: 'Moderador'
    })
      .then(res => {
        console.log('Recebido pelo servidor')
      })
      .catch(error => {
        throw error
      })
    // this.setState({ rows: [...this.state.rows, { id: Math.max(...this.state.rows.map(o => o.id)), author: 'Moderador', title: 'Adicionado por um moderador', videoId: input }] })
  }

  componentDidMount() {
    this.receiveUpdateFromPusher()
  }

  receiveUpdateFromPusher() {
    channel.bind('music-request', (data: any) => {
      this.setState({
        rows: [...this.state.rows, data]
      })
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <YoutubeSearchBox onSubmit={this.handleVideo} />
        {this.state.rows.at(0) &&
          <Youtube style={{ float: 'left' }} videoId={this.state.rows.at(0)!.videoId} opts={opts} onEnd={this.nextMusic} />
        }
        <MusicQueue rows={this.state.rows} />
        <div className="flex justify-center w-full p-10">
          <button className={'bg-red-400 text-white rounded-full w-4/6 h-10 text-2xl font-bold content-center'} onClick={this.nextMusic}>Trocar musica</button>
        </div>
      </div>
    )
  }
}
