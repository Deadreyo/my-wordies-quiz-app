import './Past-Attempts-List.css'

export default function PastAttemptsList({ pastAttempts }: PreviousRanksListProps) {
    
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
                        <tr>
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