import React,{useState} from 'react';
import { FaChessPawn } from "react-icons/fa6";
import { FaChessKing } from "react-icons/fa6";
import { FaChessQueen } from "react-icons/fa6";
import { FaChessRook } from "react-icons/fa6";
import { FaChessBishop } from "react-icons/fa6";
import { FaChessKnight } from "react-icons/fa6";
import { FaRegChessPawn } from "react-icons/fa6";
import { FaRegChessQueen } from "react-icons/fa6";
import { FaRegChessRook } from "react-icons/fa6";
import { FaRegChessBishop } from "react-icons/fa6";
import { FaRegChessKing } from "react-icons/fa6";
import { FaRegChessKnight } from "react-icons/fa6";
import './chess.css';

const Chess = () => {
    const[move,setMove]=useState(0);
  return (
    <div>
      <table>
        <tr>
            <td className="white"><FaChessRook /></td>
            <td className="black"><FaChessKnight /></td>
            <td className="white"><FaChessBishop /></td>
            <td className="black"><FaChessKing /></td>
            <td className="white"><FaChessQueen /></td>
            <td className="black"><FaChessBishop /></td>
            <td className="white"><FaChessKnight /></td>
            <td className="black"><FaChessRook /></td>
        </tr>
        <tr>
            <td className="black"><FaChessPawn /></td>
            <td className="white"><FaChessPawn /></td>
            <td className="black"><FaChessPawn /></td>
            <td className="white"><FaChessPawn /></td>
            <td className="black"><FaChessPawn /></td>
            <td className="white"><FaChessPawn /></td>
            <td className="black"><FaChessPawn /></td>
            <td className="white"><FaChessPawn /></td>
        </tr>
        <tr>
            <td className="white"></td>
            <td className="black"></td>
            <td className="white"></td>
            <td className="black"></td>
            <td className="white"></td>
            <td className="black"></td>
            <td className="white"></td>
            <td className="black"></td>
        </tr>
        <tr>
            <td className="black"></td>
            <td className="white"></td>
            <td className="black"></td>
            <td className="white"></td>
            <td className="black"></td>
            <td className="white"></td>
            <td className="black"></td>
            <td className="white"></td>
        </tr>
        <tr>
            <td className="white"></td>
            <td className="black"></td>
            <td className="white"></td>
            <td className="black"></td>
            <td className="white"></td>
            <td className="black"></td>
            <td className="white"></td>
            <td className="black"></td>
        </tr>
        <tr>
            <td className="black"></td>
            <td className="white"></td>
            <td className="black"></td>
            <td className="white"></td>
            <td className="black"></td>
            <td className="white"></td>
            <td className="black"></td>
            <td className="white"></td>
        </tr>
        <tr>
            <td className="white"><FaRegChessPawn /></td>
            <td className="black"><FaRegChessPawn /></td>
            <td className="white"><FaRegChessPawn /></td>
            <td className="black"><FaRegChessPawn /></td>
            <td className="white"><FaRegChessPawn /></td>
            <td className="black"><FaRegChessPawn /></td>
            <td className="white"><FaRegChessPawn /></td>
            <td className="black"><FaRegChessPawn /></td>
        </tr>
        <tr>
            <td className="black"><FaRegChessRook /></td>
            <td className="white"><FaRegChessKnight /></td>
            <td className="black"><FaRegChessBishop /></td>
            <td className="white"><FaRegChessKing /></td>
            <td className="black"><FaRegChessQueen /></td>
            <td className="white"><FaRegChessBishop /></td>
            <td className="black"><FaRegChessKnight /></td>
            <td className="white"><FaRegChessRook /></td>
        </tr>
    </table>
    </div>
  )
}

export default Chess;
