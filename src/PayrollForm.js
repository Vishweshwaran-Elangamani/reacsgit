// import React from 'react'
// import { useState } from 'react'
// import axios from 'axios'

// function PayrollForm() {
//     const [payrollid, setPayrollid] = useState("");
//     const [empid, setEmpid] = useState("");
//     const [payperiod, setPayperiod] = useState("");
//     const [grosspay, setGrosspay] = useState("");
//     const [detections, setDetections] = useState("");
//     const [display, setDisplay] = useState([]);
//     const handleinsert = (e) => {
//         e.preventDefault();
//         axios
//             .post("http://localhost:3000/Contact", {
                
//                 detections: detections,
//                 payrollid: payrollid,
//                 empid: empid,
//                 payperiod: payperiod,
//                 grosspay: grosspay,
//             })
//             .then((res) => { //diaplay as table

//                 setDetections([..., res.data]);
//                 setGrosspay([...grosspay, res.data]);       
//                 setPayperiod([...payperiod, res.data]);
//                 setPayrollid([...payrollid, res.data]);
//                 setEmpid([...empid, res.data]);
//             })
//     }

//     // const handleinsert = (e) => {
//     //     e.preventDefault();
//     //     axios
//     //         .post("http://localhost:5000/insert", {
            
//     //             detections: detections,
//     //             payrollid: payrollid,
//     //             empid: empid,
//     //             payperiod: payperiod,
//     //             grosspay: grosspay,
//     //         })
//     //         .then((res) => {

//     //             setDetections([...detections, res.data]);
//     //             setGrosspay([...grosspay, res.data]);
//     //             setPayperiod([...payperiod, res.data]);
//     //             setPayrollid([...payrollid, res.data]);
//     //             setEmpid([...empid, res.data]);
//     //         })
//     // }

//   return (
//       <div>
//           <form onSubmit={handleinsert}>
//               <input type="text" placeholder="Payroll ID" onChange={(e) => setPayrollid(e.target.value)} />
//               <input type="text" placeholder="Employee ID" onChange={(e) => setEmpid(e.target.value)} />              
//               <input type="text" placeholder="Pay Period" onChange={(e) => setPayperiod(e.target.value)} />
//               <input type="text" placeholder="Gross Pay" onChange={(e) => setGrosspay(e.target.value)} />
//               <input type="text" placeholder="Detections" onChange={(e) => setDetections(e.target.value)} />
//               <button type="submit">Submit</button>
//           </form> //display in table
//           <table>
//               <thead>
//                   <tr>
//                       <th>Payroll ID</th>
//                       <th>Employee ID</th>
//                       <th>Pay Period</th>
//                       <th>Gross Pay</th>
//                       <th>Detections</th>
//                   </tr>
//               </thead>
//               <tbody>
//                   {display.map((dispaly, index) => (
//                       <tr key={index}>
//                           <td>{dispaly.payrollid}</td>
//                           <td>{dispaly.empid}</td>
//                           <td>{dispaly.payperiod}</td>
//                           <td>{dispaly.grosspay}</td>
//                           <td>{dispaly.detections}</td>
//                       </tr>
//                   ))}
//               </tbody>              
//           </table>  
          
          
      
//     </div>
//   )
// }

// export default PayrollForm
