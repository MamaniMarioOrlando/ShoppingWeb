export default function formatCurrecy(num){
    return "$ "+Number(num.toFixed(1)).toLocaleString()+ " ";
}