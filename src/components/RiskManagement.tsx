import {useState, useEffect} from 'react'
import axios from 'axios'

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


type riskData = {
        nigeria_stocks?: string,
        foreign_stocks?: string,
        teck_stocks?: string,
        emerging_stocks?: string,
        nigeria_bonds?: string,
        foreign_bonds?: string,
        commodities?: string,
        real_estate?: string
}

const RiskManagement = () => {
    const [riskValue, setRiskValue] = useState<string>('1')
    const [data, setData] = useState<riskData>({})
    console.log(data)
    useEffect(()=>{
        fetchData()
    }, [riskValue])

    const fetchData = async () => {
        const response = await axios.get(
            `http://127.0.0.1:8000/api/robo/${riskValue}`
        )
        setData(response.data)
        {/*console.log(response.data.nigeria_bonds)*/}
    };
    

    return ( 
        <>
            <Box>
                <Slider 
                    value={parseInt(riskValue)}
                    defaultValue={1}
                    aria-label="Default" 
                    valueLabelDisplay="auto" 
                    step={1}
                    min={1}
                    max={10}
                    onChange={(e)=>(setRiskValue((e.target as HTMLInputElement).value))}
                    color='success'
                />
            </Box>

            <Box>
                {data? 
                    <Box>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        Data Rating
                                    </TableCell>
                                    <TableCell>
                                        Value
                                    </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        Nigeria Stocks
                                    </TableCell>
                                    <TableCell>
                                        {data.nigeria_stocks}
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                        Foreign Stocks
                                    </TableCell>
                                    <TableCell>
                                        {data.foreign_stocks}
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                        Tech Stocks
                                    </TableCell>
                                    <TableCell>
                                        {data.teck_stocks}
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                        Emerging Stocks
                                    </TableCell>
                                    <TableCell>
                                        {data.emerging_stocks}
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                        Nigeria Bonds
                                    </TableCell>
                                    <TableCell>
                                        {data.nigeria_bonds}
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                        Foreign Bonds
                                    </TableCell>
                                    <TableCell>
                                        {data.foreign_bonds}
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                        Commodities
                                    </TableCell>
                                    <TableCell>
                                        {data.commodities}
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                        Real Estate
                                    </TableCell>
                                    <TableCell>
                                        {data.real_estate}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Box>
                    : ''
            }
            </Box>
        </>
     );
}
 
export default RiskManagement;