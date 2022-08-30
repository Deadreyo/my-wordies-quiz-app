import './Past-Attempts-List.css'

export default function PastAttemptsList({ pastAttempts }: PreviousRanksListProps) {
    
    /*
        Note:
        - Using array index as key is an anti-pattern,
        BUT in this use case, the array never changes, so it is acceptable.
    */

    return (
        <div className="table-div">
            <table>
                <caption>Past Attempts</caption>
                <thead>
                    <tr>
                        <th>Attempt #</th>
                        <th>Rank</th>
                    </tr>   
                </thead>
                <tbody>
                {
                    pastAttempts.map( (val, i) => (
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{val}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

interface PreviousRanksListProps {
    pastAttempts: number[]
}