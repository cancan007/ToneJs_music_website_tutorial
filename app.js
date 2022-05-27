function sequencer() {

    const kickInputs2 = document.querySelectorAll('.kick')
    console.log(kickInputs2)

    const kick = new Tone.Player('./drums/mixkit-tribal-dry-drum-558.wav', () => console.log('kick buffer loaded')).toDestination();
    const snare = new Tone.Player('./drums/mixkit-soft-horror-hit-drum-564.wav', () => {
        console.log('snare buffer loaded')
    }).toDestination();
    console.log(kick)

    //kick.start()
    //snare.start()
    //console.log(Tone)
    //const kickInputs = document.querySelectorAll('.kick')
    //const snareInputs = document.querySelectorAll(".snare")
    let index = 0;
    Tone.Transport.scheduleRepeat(repeat, "8n");
    //Tone.Transport.start();


    console.log('Started')

    function repeat() {
        console.log('repeat')
        let step = index % 8;
        let kickInputs = document.querySelector(`.kick input:nth-child(${step + 1})`);
        if (kickInputs.checked) {
            kick.start();
            console.log(step);
        }

        let snareInputs = document.querySelector(`.snare input:nth-child(${step + 1})`);
        if (snareInputs.checked) {
            snare.start();
        }
        index++;
    }
}

document.querySelector(".play-button").addEventListener("click", e => Tone.Transport.start())

sequencer()