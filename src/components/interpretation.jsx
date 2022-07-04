export default function Interpretation () {
  return (
    <div className='overflow-x-hidden w-full bg-slate-800 flex flex-col items-center'>
      <div className='w-5/6 py-20 flex flex-col items-center justify-start'>
        <h1 className='text-4xl text-white text-left w-full'>
          Interpretation:
        </h1>
        <div className="w-full text-md md:text-2xl py-5 text-white text-left">
        <p >
          &quot;Tarot card reading is a form of cartomancy whereby practitioners use
          tarot cards purportedly to gain insight into the past, present or
          future. They formulate a question, then draw cards to interpret them
          for this end.&quot; 
        </p>
        <p>
        - Wikipedia
        </p>
        </div>
        <div className="w-full text-md md:text-2xl py-5 text-white text-left">
            <p >
            Each deck consists of 78 cards, each with a unique meaning. These 
            consist of the Major Arcana, which represent life archetypes, and the Minor Arcana,
            which are concerned with day-to-day life and organized into 4 suits. <b>Click a card
            to flip it and learn about its meaning.</b>
            </p>
        </div>
        <div className="w-full text-md md:text-2xl py-5 text-white text-left">
            <p >
            A three card spread such as this one can be read with a variety of different meanings.
            For example, the first card could represent the past, the second the present, and the 
            third the future. Other interpretations include:
            </p>
            <table className="w-full flex-col items-center mt-5 border justify-center">
                <thead>
                <tr>
                    <th className="px-5">First Card</th>
                    <th>Second Card</th>
                    <th>Third Card</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="px-5">You</td>
                    <td>Your Path</td>
                    <td>Your Potential</td>
                </tr>
                <tr>
                    <td className="px-5">You</td>
                    <td>Relationship</td>
                    <td>Partner</td>
                </tr>
                <tr>
                    <td className="px-5">Situation</td>
                    <td>Action</td>
                    <td>Outcome</td>
                </tr>                
                <tr>
                    <td className="px-5">Past</td>
                    <td>Present</td>
                    <td>Future</td>
                </tr>
                </tbody>
            </table>
            
        </div>
      </div>
    </div>
  )
}
