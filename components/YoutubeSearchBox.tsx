import React, { useState } from 'react'

type Props = {
    onSubmit: any;
  };

export default function YoutubeSearchBox({onSubmit} : Props) {
    const [term, setTerm] = useState('')
    
      let onFormSubmit = (event: React.ChangeEvent<HTMLFormElement
        >) => {
        event.preventDefault();
        onSubmit(term);
        setTerm('');
      }
    
        return (
          <div className="ui segment">
            <form className="ui form" onSubmit={onFormSubmit} >
              <div className="field">
                <label>Digite o ID do Video</label><br/>
                <input type="text" value={term} onChange={e => setTerm(e.target.value)} />
              </div>
            </form>
          </div>
        )
}
