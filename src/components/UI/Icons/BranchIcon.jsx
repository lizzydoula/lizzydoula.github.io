import React from 'react'
import { theme } from '../../../../config/theme'

const BranchIcon = ({ className, color = theme.colors.almond_frost, width = '68', height = '78' }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    width={width}
    height={height}
    viewBox="0 0 68 78"
  >
    <path d="M66.1702 24.09V19.83C63.8002 20.55 60.3202 24.61 59.6402 25.5C59.5702 25.58 59.5502 25.68 59.5502 25.78C59.5002 25.79 59.4502 25.8 59.4102 25.81C58.9902 23.47 58.4502 21.13 57.7902 18.84C59.0302 18.99 60.1502 18.19 61.1802 17.54C61.9102 17.08 63.6302 15.78 63.0902 14.64C62.6002 13.61 61.4802 13.88 60.6602 14.33C59.2602 15.1 58.2302 16.46 57.6002 17.9C57.5802 17.95 57.5702 18 57.5602 18.05C57.0002 16.16 56.3602 14.3 55.6302 12.48C55.6902 12.4 55.7402 12.33 55.8002 12.25C58.2502 11.86 64.9402 9.58995 62.5202 6.66995C60.3602 4.06995 56.6802 9.16995 55.1602 11.36C54.9402 10.83 54.7002 10.3 54.4602 9.77995C54.5302 9.81995 54.6002 9.83995 54.6602 9.85995C54.9402 10.08 55.3102 10.06 55.6702 9.90995C56.4002 9.60995 56.6102 8.21995 55.9202 7.74995C55.2102 7.25995 54.1902 7.84995 54.0002 8.61995C53.9902 8.66995 53.9802 8.71995 53.9802 8.76995C53.8102 8.41995 53.6502 8.05995 53.4702 7.70995C53.4802 7.67995 53.4802 7.65996 53.4802 7.62995C53.4902 7.61995 53.5002 7.60995 53.5002 7.59995C53.6902 7.52995 53.7102 7.21995 53.7502 7.06995C54.0202 6.10995 54.2902 5.11995 54.3602 4.11995C54.4602 2.65995 54.1202 0.809955 52.6802 0.139955C51.3902 -0.470045 50.5002 1.19995 50.3302 2.16995C50.0102 4.03995 51.4502 6.55995 52.6002 7.91995C52.6802 8.01995 52.7802 8.06995 52.8902 8.08995C53.0602 8.61995 53.2402 9.14995 53.4102 9.66995C53.3202 9.58995 53.2302 9.51995 53.1402 9.44995C52.4202 8.87995 51.2202 8.46995 50.4502 9.12995C49.7802 9.70995 50.1102 10.99 50.8602 11.33C51.7402 11.74 52.9902 11.82 53.9402 11.7C53.9802 11.7 54.0102 11.67 54.0502 11.66C54.4502 12.95 54.8502 14.25 55.2202 15.54C55.2102 15.53 55.2002 15.52 55.1902 15.5C54.6802 14.88 54.0002 14.55 53.2602 14.29C52.1602 13.9 50.5602 13.65 49.5902 14.47C48.5402 15.36 50.0302 16.41 50.7702 16.72C52.3102 17.35 54.0802 16.84 55.5802 17.56C55.6602 17.6 55.7302 17.61 55.8002 17.6C55.9102 18.01 56.0202 18.42 56.1302 18.83C55.8702 18.7 55.5602 18.67 55.2802 18.75C54.7102 18.91 54.1702 19.37 54.3502 20.02C54.5302 20.66 55.3302 20.84 55.8902 20.71C55.9202 20.7 55.9502 20.69 55.9802 20.68C56.0002 20.67 56.0202 20.67 56.0402 20.67C56.0602 20.66 56.0802 20.65 56.1002 20.64C56.1102 20.64 56.1102 20.63 56.1202 20.63C56.2902 20.56 56.4302 20.45 56.5002 20.27C56.6602 20.89 56.8202 21.51 56.9602 22.13C56.4502 21.68 55.8202 21.45 55.1302 21.33C53.6502 21.08 50.7202 21.73 51.3802 23.83C51.9102 25.53 54.4702 25.69 55.8802 25.58C56.3302 25.55 57.1802 25.43 57.6202 25.05C57.9702 26.74 58.3002 28.43 58.5602 30.14C57.8102 29.38 56.7202 28.99 55.6602 28.65C54.6402 28.33 52.0602 27.82 51.3502 29.03C50.6502 30.23 52.1402 30.88 53.1102 31.07C54.0902 31.26 55.0802 31.28 56.0502 31.49C56.9402 31.69 57.7502 31.98 58.6802 31.96C58.7202 31.96 58.7502 31.95 58.7902 31.94C58.8902 32.69 58.9802 33.44 59.0602 34.19C58.8702 33.97 58.6202 33.81 58.3302 33.77C58.2502 33.76 58.1502 33.76 58.0602 33.77C58.0402 33.77 58.0302 33.76 58.0102 33.76C57.3802 33.66 56.7202 34.08 56.6202 34.7C56.3902 36.08 58.5402 36.75 59.2202 35.78C59.2902 36.51 59.3402 37.23 59.3902 37.96C59.2802 37.76 59.1402 37.58 58.9602 37.4C58.2902 36.75 57.2002 36.27 56.3302 36.71C55.4402 37.15 55.8302 38.35 56.4302 38.85C56.9202 39.26 57.5402 39.52 58.0902 39.85C58.5402 40.12 59.0002 40.34 59.4902 40.51C59.5202 42.15 59.5002 43.8 59.4102 45.45C59.2802 45.29 59.1402 45.14 58.9702 44.99C58.5202 44.62 57.9402 44.62 57.4202 44.81C56.7302 45.07 56.5602 45.73 56.5902 46.4C56.6302 47.15 57.3502 47.45 57.9802 47.64C58.3302 47.75 58.7002 47.73 59.0502 47.85C59.1002 47.87 59.1602 47.88 59.2202 47.89C59.1202 48.98 59.0002 50.08 58.8402 51.18C57.2402 48.73 55.5402 46.35 53.8702 44.06C53.8702 44.06 53.8802 44.06 53.8802 44.05C53.9702 44.08 54.0702 44.07 54.1702 44.01C54.2702 43.95 54.3402 43.87 54.4102 43.78C54.5602 43.7 54.7102 43.61 54.7902 43.48C54.9702 43.23 55.1502 42.99 55.3002 42.72C55.6002 42.16 55.6102 41.46 54.9602 41.19C54.5202 41 53.9002 41.4 53.6102 41.7C53.2802 42.04 53.1702 42.57 53.1502 43.07C52.8902 42.72 52.6302 42.37 52.3802 42.02C51.6202 40.99 50.8402 39.97 50.0602 38.94C51.2802 38.79 52.7802 38.39 53.4202 37.51C54.2502 36.35 54.4302 34.97 53.1302 34.09C51.8302 33.2 50.6902 33.98 49.8102 34.97C49.2702 35.58 48.7602 36.52 48.8402 37.36C48.4502 36.86 48.0702 36.37 47.6802 35.87C47.7902 35.89 47.9202 35.89 48.0602 35.87C48.2202 35.84 48.3702 35.77 48.4902 35.67C48.6102 35.6 48.7002 35.49 48.7602 35.35C48.9002 35.09 48.9402 34.76 48.8002 34.47C48.7902 34.45 48.7802 34.44 48.7702 34.42C48.6502 34.05 48.3802 33.81 47.8602 33.85C47.3902 33.88 46.8402 34.36 46.8902 34.87C46.7502 34.7 46.6102 34.52 46.4702 34.35C46.5002 34.33 46.5202 34.32 46.5502 34.3C47.4702 33.5 48.3602 32.65 48.8802 31.52C49.2702 30.67 49.2502 29.27 48.3202 28.78C47.4602 28.33 46.8002 29.35 46.4902 29.98C45.9702 31.05 45.9502 32.31 45.7702 33.49C44.5602 32.02 43.3402 30.57 42.0802 29.15C42.4202 29.07 42.7802 29.01 43.1302 28.81C43.9602 28.33 44.7702 27.85 45.5002 27.23C46.3402 26.52 47.6202 24.66 46.7602 23.5C45.8302 22.23 43.7602 22.3 42.8102 23.55C41.9802 24.65 41.4902 26.01 40.7802 27.19C40.7102 27.31 40.6502 27.42 40.5902 27.54C40.2902 27.22 39.9902 26.9 39.6902 26.58C39.8902 26.64 40.1402 26.59 40.2802 26.53C40.4502 26.46 40.5602 26.37 40.6702 26.23C40.8702 26 40.9702 25.35 40.8202 25.07C40.6302 24.74 40.2902 24.43 39.8802 24.51C39.5002 24.58 39.0702 24.82 38.9102 25.19C38.8402 25.37 38.8202 25.54 38.8402 25.69C38.6902 25.53 38.5402 25.37 38.3902 25.22C38.4202 25.15 38.4402 25.07 38.4402 24.99C38.4402 24.91 38.4302 24.85 38.4202 24.79C39.2602 24.25 39.8102 23.07 39.8002 22.16C39.7802 21.04 39.1802 19.58 37.8702 19.67C36.2702 19.78 36.1202 20.89 36.0002 22.23C35.9802 22.42 35.9802 22.63 35.9802 22.83C35.8402 22.7 35.7102 22.56 35.5702 22.43C34.5202 21.43 33.4202 20.47 32.3202 19.52C32.3802 19.48 32.4402 19.44 32.5002 19.4C32.6802 19.39 32.8602 19.35 33.0702 19.24C33.6902 18.92 34.1902 18.39 34.6202 17.85C35.2502 17.06 35.8302 15.52 34.9902 14.66C34.2902 13.94 33.0902 14.55 32.5202 15.09C31.6202 15.94 31.3102 17.33 31.2502 18.59C30.7702 18.19 30.2802 17.79 29.8002 17.4C30.0902 17.3 30.3602 17.12 30.5702 16.86C30.7102 16.69 30.7902 16.5 30.8402 16.29C30.9402 16.1 31.0002 15.9 31.0002 15.68C31.0002 15.22 30.6902 14.67 30.3202 14.4C29.9002 14.09 29.4502 14.1 28.9802 14.26C28.2802 14.5 27.9102 15.2 27.9202 15.89C27.3902 15.48 26.8602 15.06 26.3302 14.66C27.5002 13.82 27.4902 11.37 27.1002 10.19C26.6502 8.84995 25.2202 7.64995 24.1002 8.99995C23.0702 10.24 23.6102 11.74 24.2502 13.03C23.0502 12.03 21.9402 10.97 20.3202 11.08C20.2702 11.06 20.2102 11.05 20.1402 11.07C20.1302 11.07 20.1102 11.07 20.1002 11.08C19.2202 10.6 17.5902 10.43 17.0002 10.32C15.4502 10.02 13.5202 9.94995 12.3802 11.21C12.1202 11.5 12.0502 11.83 12.0802 12.15C11.9502 12.42 11.9102 12.71 12.0702 13C13.5102 15.59 18.1902 13.43 20.5002 12.54C20.8102 12.53 21.1602 12.61 21.5402 12.75C21.4402 12.78 21.3402 12.81 21.2402 12.85C20.2702 13.28 19.7702 14.68 20.5702 15.51C20.6902 15.64 20.8302 15.73 20.9802 15.81C21.0302 15.84 21.0802 15.86 21.1402 15.88C21.5302 16.04 21.9602 16.07 22.3502 15.95C23.1902 15.76 23.9002 15.01 23.7402 14.08C23.7402 14.07 23.7402 14.07 23.7402 14.06C24.3402 14.51 24.9602 15.03 25.5502 15.56C25.4502 15.58 25.3402 15.61 25.2402 15.64C23.9202 15.66 22.7002 16.29 21.5902 16.98C20.7402 17.5 20.2102 18.42 21.1502 19.15C22.5602 20.24 25.9902 17.94 27.0202 16.9C27.9202 17.74 28.7002 18.47 29.2002 18.86C29.8402 19.35 30.4702 19.86 31.0902 20.38C30.1202 20.13 29.0102 20.08 28.1402 20.2C27.0902 20.35 25.4702 20.57 25.4502 21.91C25.4302 23.01 26.8202 23.33 27.6402 23.31C29.2802 23.28 30.8802 22.13 32.3102 21.42C32.6802 21.75 33.0502 22.08 33.4102 22.42C33.3002 22.4 33.1802 22.4 33.0702 22.42C32.5902 22.52 32.0102 22.89 31.8302 23.37C31.6402 23.89 31.7002 24.34 32.0102 24.79C32.1202 24.95 32.2802 25.05 32.4402 25.11C32.7502 25.45 33.1702 25.54 33.6302 25.46C34.5402 25.29 34.7702 24.47 34.5802 23.72C34.5702 23.63 34.5402 23.54 34.5002 23.45C34.9602 23.89 35.4202 24.34 35.8702 24.79C35.8202 24.83 35.7802 24.86 35.7302 24.89C34.5802 24.94 33.3802 25.66 32.7202 26.53C32.4502 26.88 31.9602 27.3 32.0202 27.8C32.0902 28.37 32.4202 28.68 32.9502 28.85C34.2002 29.25 35.5902 27.72 36.3502 26.98C36.6102 26.73 36.8802 26.39 37.0802 26.02C37.9502 26.92 38.8102 27.82 39.6602 28.73C39.7402 28.82 39.8202 28.91 39.9002 29C39.2602 28.89 38.6202 28.94 37.9002 29.13C37.1502 29.33 35.9602 30.07 36.3102 31.04C37.0302 33.04 39.9802 31 40.9102 30.13C41.1802 30.43 41.4502 30.73 41.7102 31.04C41.5702 31.01 41.4202 31.02 41.2602 31.07C41.0502 31.14 40.8702 31.26 40.7302 31.41C40.7202 31.42 40.7002 31.42 40.6902 31.43C40.0302 31.9 40.2602 32.81 40.9002 33.2C41.5802 33.61 42.5702 33.19 42.6502 32.38C42.6602 32.28 42.6602 32.18 42.6402 32.09C43.1602 32.68 43.6702 33.28 44.1802 33.88C44.1402 33.89 44.1002 33.9 44.0702 33.9C42.8402 33.53 41.0802 33.5 40.9802 34.92C40.9202 35.74 41.7302 36.07 42.4102 35.97C43.3302 35.83 44.2202 35.33 45.0702 34.93C47.0302 37.28 48.9302 39.69 50.7402 42.16C49.0502 41.5 47.2402 40.4 45.7002 39.76C45.6802 39.54 45.6602 39.3 45.6202 39.04C45.8502 38.35 45.5802 37.41 44.9102 37.11C44.3402 36.86 43.8002 37.27 43.7102 37.86C43.6702 38.12 43.6902 38.46 43.8202 38.7C43.9102 38.87 43.9502 39.03 43.9902 39.2C42.5902 38.85 41.1102 38.72 39.6602 38.63C39.6602 38.5 39.6102 38.38 39.4902 38.28C39.4202 37.8 39.3202 37.35 39.0602 36.89C38.6702 36.19 38.1902 35.58 37.6902 34.96C36.9902 34.07 35.9302 33.39 34.8302 33.96C33.7002 34.54 34.5602 35.93 35.1302 36.55C35.7902 37.27 36.5202 37.98 37.3602 38.49C36.2402 38.42 35.1402 38.42 34.0502 38.45C34.1502 38.33 34.2202 38.18 34.2502 37.99C34.3702 37.8 34.4202 37.56 34.3902 37.25C34.3202 36.57 33.7602 36.23 33.1202 36.34C32.5202 36.44 32.1202 36.92 32.0402 37.49C31.9802 37.86 32.1402 38.27 32.4102 38.54C32.2402 38.55 32.0702 38.56 31.9002 38.58C31.8902 38.57 31.8802 38.56 31.8702 38.54C31.7402 38.23 31.5802 37.91 31.3802 37.58C31.0802 36.59 30.4002 35.67 29.7502 34.95C29.0102 34.13 26.9802 33.34 25.9102 33.93C24.7502 34.57 25.4302 35.81 26.1802 36.53C26.7402 37.08 27.3802 37.57 28.0902 37.91C28.8202 38.25 29.7302 38.4 30.4902 38.72C28.3002 38.99 26.1602 39.45 24.0702 40.05C23.9502 39.88 23.8302 39.7 23.7102 39.53C23.7002 39.45 23.6802 39.37 23.6702 39.3C23.6802 39.23 23.6702 39.16 23.6502 39.08C23.6402 39.06 23.6302 39.04 23.6202 39.02C23.3202 37.58 22.7502 36.02 22.0002 34.96C21.3502 34.04 20.0302 32.38 18.6902 33C17.3602 33.61 18.4002 35.8 18.8602 36.6C19.7502 38.15 21.3802 39.32 22.8302 40.44C21.4202 40.89 20.0402 41.4 18.6602 41.97C18.8402 41.51 18.7902 40.95 18.5402 40.51C18.5202 40.31 18.4702 40.12 18.3602 39.94C18.0702 39.47 17.4202 39.21 16.8902 39.25C15.7202 39.33 15.0502 40.75 15.3302 41.82C15.4902 42.44 15.9702 42.78 16.5302 42.9C16.1502 43.07 15.7702 43.24 15.3902 43.42C15.3402 43.37 15.2802 43.32 15.2002 43.28C15.0202 43.19 14.8502 43.09 14.6702 43C13.1802 41.22 11.6402 39.49 9.5702 38.38C8.2302 37.66 6.1302 37.73 5.2202 39.13C2.4302 43.44 10.5802 43.69 13.9202 44.13C11.4502 45.36 9.0002 46.73 6.5602 48.16C4.9102 48.11 3.5002 48.27 1.8902 48.8C0.940205 49.12 -0.429795 50.48 0.130205 51.62C1.4102 54.23 5.4602 51.2 7.0002 49.56C6.9902 49.62 6.9802 49.68 6.9902 49.74C7.0402 50.46 7.3702 51.27 8.2002 51.28C8.8902 51.28 9.80021 50.73 9.68021 49.94C9.6202 49.57 9.59021 49.28 9.34021 48.98C9.06021 48.64 8.5702 48.56 8.1602 48.64C8.01021 48.67 7.8702 48.74 7.7402 48.82C7.6502 48.82 7.5602 48.85 7.4802 48.89C7.4802 48.87 7.4902 48.84 7.4902 48.82C8.8602 48.4 10.1702 47.83 11.4402 47.19C10.8402 48.08 10.3302 49.04 10.1502 50.02C9.8902 51.42 10.4602 52.91 12.0302 53.07C13.5502 53.22 14.4402 51.28 14.8402 50.13C15.3302 48.7 14.8602 47.05 14.0402 45.81C14.8502 45.36 15.6602 44.91 16.4802 44.48C16.9902 44.21 17.5202 43.95 18.0502 43.7C17.5402 44.78 17.5602 46.46 18.9002 46.96C20.1402 47.43 21.6102 46.7 22.0802 45.48C22.4502 44.5 22.1502 43.16 21.4502 42.34C21.4602 42.32 21.4602 42.29 21.4602 42.27C22.0602 42.05 22.6602 41.84 23.2702 41.64C23.2502 41.66 23.2302 41.67 23.2102 41.69C22.9202 42.01 22.7702 42.66 23.1302 43.01C23.4102 43.28 23.7302 43.36 24.0902 43.34C24.2002 43.34 24.3102 43.33 24.4102 43.31C25.3702 43.14 25.3302 41.52 24.4402 41.27C25.6802 40.89 26.9302 40.56 28.1702 40.29C25.5302 43.45 23.4902 47.13 20.9202 50.47C20.8602 50.42 20.7902 50.38 20.7302 50.33C20.2702 49.96 19.6502 49.71 19.1102 49.49C18.1802 49.12 17.0502 48.85 16.3602 49.76C16.3302 49.81 16.3102 49.85 16.2902 49.9C16.2802 49.92 16.2602 49.95 16.2502 49.98C16.2402 50.02 16.2302 50.07 16.2202 50.11C16.2102 50.14 16.2002 50.16 16.2002 50.2C16.2002 50.22 16.2102 50.24 16.2102 50.27C16.2102 50.3 16.2102 50.34 16.2202 50.37C16.2302 50.54 16.2802 50.69 16.3702 50.82C16.5702 51.18 16.9302 51.48 17.2602 51.59C17.7302 51.75 18.2002 51.76 18.6902 51.81C19.0702 51.86 19.4402 51.89 19.8002 51.87C19.6502 52.05 19.5002 52.24 19.3402 52.41C18.3102 53.57 17.2402 54.65 16.1402 55.67C16.2202 55.37 16.1802 55.09 16.0702 54.84C16.0002 54.64 15.8802 54.45 15.7102 54.32C15.5202 54.19 15.3102 54.12 15.0902 54.1C14.9402 54.07 14.8002 54.05 14.6402 54.06C14.2202 54.09 13.9002 54.32 13.7202 54.63C13.6902 54.66 13.6702 54.68 13.6402 54.71C13.0802 55.42 13.2402 56.5 14.0902 56.91C14.2702 57 14.5002 57 14.7202 56.96C14.1302 57.49 13.5302 58.01 12.9202 58.52C12.5302 58.19 12.0502 57.91 11.7202 57.65C10.9702 57.05 10.1302 56.61 9.25021 56.24C8.04021 55.73 5.3802 55.23 4.4802 56.56C3.5002 58 4.6102 59.1 5.9702 59.63C7.4202 60.2 9.2702 60.29 10.9602 60.15C8.7402 61.95 6.4702 63.71 4.2002 65.6C4.0402 65.5 3.8602 65.42 3.6802 65.4C3.3702 65.36 3.1002 65.45 2.8602 65.62C2.6402 65.74 2.4502 65.92 2.3002 66.11C1.6602 66.92 2.4002 68.18 3.3802 68.16C4.3902 68.15 5.0802 67.21 4.7502 66.25C5.8802 65.76 6.9902 65.2 8.0702 64.56C8.0702 64.6 8.0702 64.63 8.0702 64.67C7.6402 65.4 7.4002 66.24 7.3202 67.09C7.2502 67.81 7.7302 69.12 8.6902 68.87C9.6902 68.61 10.2702 67.5499 10.4802 66.6C10.7002 65.56 10.2902 64.45 9.8302 63.45C10.3602 63.1 10.8802 62.72 11.3902 62.34C11.3802 62.41 11.3802 62.48 11.3802 62.55C11.3202 62.73 11.3202 62.94 11.3702 63.16C11.4902 63.74 11.9802 64.09 12.5302 64.19C13.7202 64.41 14.8302 63.44 14.6402 62.22C14.5702 61.75 14.3302 61.48 14.0302 61.34C13.8302 61.06 13.4702 60.97 13.1002 60.99C14.5102 59.82 15.8602 58.56 17.1502 57.22C16.9802 57.93 16.8402 58.65 16.7002 59.34C16.5602 60.07 17.0202 61.48 18.0002 61.28C20.5402 60.77 19.9302 57.29 18.6602 55.61C18.6602 55.6 18.6702 55.59 18.6602 55.57C19.3802 54.75 20.0902 53.91 20.7702 53.06C20.7402 53.73 21.0702 54.43 21.7302 54.65C21.9602 54.81 22.2402 54.87 22.5402 54.8C23.4802 54.58 24.0402 53.41 23.7602 52.52C23.5002 51.7 22.6402 51.4 21.9002 51.6C22.8802 50.3 23.8202 48.97 24.7102 47.63C24.8302 48.61 25.1202 49.56 25.6602 50.42C26.1002 51.12 26.9202 52.28 27.8802 52.17C28.9602 52.04 29.2902 50.6 28.9502 49.72C28.6702 49 28.2002 48.43 27.6902 47.87C27.0902 47.2 26.5802 46.45 25.9602 45.8C25.9402 45.78 25.9202 45.78 25.9102 45.77C27.1002 43.86 28.1902 41.94 29.1702 40.08C29.3902 40.04 29.6002 39.99 29.8102 39.95C30.8002 39.77 31.8402 39.68 32.9002 39.64C30.9902 40.44 28.6602 41.79 29.9402 43.37C30.6002 44.18 32.1002 43.76 32.8102 43.28C34.0402 42.44 34.9402 41.07 35.4602 39.66C36.9302 39.73 38.4102 39.86 39.8402 40.03C39.5202 40.16 39.2102 40.31 38.9202 40.5C38.5202 40.78 37.5602 41.69 38.1602 42.26C38.7602 42.82 39.5902 42.63 40.2702 42.3C41.0702 41.9 41.6202 41.06 42.0702 40.29C42.1202 40.3 42.1702 40.3 42.2302 40.31C42.5402 40.35 42.8602 40.4 43.1802 40.46C42.6302 40.54 42.3002 41.03 42.3902 41.57C42.3602 41.72 42.3602 41.88 42.4202 42.03C42.5102 42.27 42.7202 42.44 42.9702 42.54C43.4902 42.93 44.4602 42.75 44.7702 42.22C45.1002 41.66 44.7002 40.95 44.1602 40.67C45.3802 40.98 46.6302 41.44 47.7802 41.99C45.7502 42.66 43.1202 44.29 44.0002 46.59C44.4702 47.81 45.9402 46.72 46.4802 46.28C47.6102 45.35 48.6902 44.12 49.1302 42.69C49.3202 42.8 49.5002 42.9 49.6802 43.01C49.6502 42.99 51.5802 43.54 51.8502 43.65C52.0302 43.91 52.2102 44.17 52.4002 44.42C52.1102 44.33 51.7902 44.33 51.5102 44.37C50.9502 44.46 50.6302 44.8 50.5102 45.22C50.3902 45.52 50.4402 45.87 50.5902 46.19C50.6502 46.34 50.7202 46.48 50.8202 46.6C50.9902 46.82 51.2402 46.97 51.5002 47.04C52.3002 47.32 53.2802 46.91 53.4602 46.03C53.4702 46 53.4702 45.97 53.4702 45.93C53.8302 46.45 54.1802 46.97 54.5402 47.49C54.1402 47.3 53.5602 47.28 53.2402 47.26C52.4302 47.22 51.6102 47.51 51.0702 48.12C50.7402 48.48 50.3502 49.32 50.8102 49.76C51.2602 50.2 51.8702 50.14 52.4402 50.02C53.0702 49.89 53.6702 49.62 54.2502 49.33C54.5702 49.17 55.0602 49 55.3802 48.73C55.4102 48.78 55.4502 48.83 55.4802 48.88C57.4102 51.8 59.3002 54.79 61.0502 57.84C59.9102 57.88 58.7802 57.98 57.6402 58.04C57.6402 58.01 57.6302 57.98 57.6302 57.95C57.6602 57.92 57.6902 57.89 57.7002 57.85C57.8402 57.49 57.7902 57.04 57.8002 56.66C57.8002 55.89 57.5502 55.38 57.2102 54.68C56.5902 53.43 56.2702 52.26 54.6102 52.37C53.1802 52.47 53.0102 54.07 53.3802 55.12C53.7802 56.26 54.7402 57.32 55.7902 58.09C55.3102 58.09 54.8302 58.09 54.3502 58.07C53.6202 58.03 52.9002 57.92 52.1802 57.77C52.1902 57.77 52.1902 57.76 52.2002 57.76C52.7102 57.38 52.8502 56.65 52.5102 56.11C52.1602 55.56 51.3202 55.29 50.7802 55.73C50.4202 56.03 50.2402 56.48 50.3202 56.9C50.3302 57.06 50.3702 57.22 50.4402 57.37C49.6902 57.18 48.9402 56.98 48.1802 56.81C48.2902 56.59 48.3802 56.35 48.4502 56.1C48.7802 55.7 49.0702 55.25 49.3002 54.71C49.7202 53.73 49.8502 52.38 49.2002 51.47C49.0702 51.29 48.8202 51.27 48.6302 51.34C46.5802 52.14 46.3302 54.5 46.5502 56.49C45.7802 56.38 45.0002 56.32 44.2302 56.29C44.4402 54.88 44.7202 53.56 44.2302 52.16C43.9102 51.26 43.3702 49.43 42.0402 49.71C38.8102 50.39 41.0002 54.34 42.4402 56.29C41.8102 56.31 41.1902 56.36 40.5602 56.43C41.2302 56.02 40.9102 54.52 39.8202 54.6C39.2002 54.65 38.8502 55.38 39.0402 55.93C39.1302 56.19 39.3002 56.45 39.5702 56.54C39.5902 56.55 39.6002 56.55 39.6202 56.55C39.4302 56.58 39.2402 56.61 39.0502 56.64C39.0202 56.61 38.9902 56.58 38.9602 56.56C38.2602 54.49 38.2502 52.27 37.1802 50.31C36.6902 49.43 35.1802 47.44 33.9302 48.1C30.8502 49.71 34.3802 53.52 36.5902 55.76L36.6202 55.8C36.6802 55.89 36.7502 55.95 36.8302 56C37.1902 56.36 37.4902 56.67 37.7202 56.92C36.9502 57.1 36.1902 57.32 35.4402 57.56C35.6002 57.31 35.6902 57.01 35.6702 56.74C35.6702 56.58 35.6202 56.42 35.5102 56.24C34.9702 55.44 33.7802 55.57 33.4402 56.46C33.2502 56.97 33.5702 57.65 34.0502 57.96C33.5002 57.97 32.9602 57.93 32.4102 57.99C31.2802 58.12 30.0602 58.7 30.0402 59.98C30.0202 61.11 31.1902 61.5 32.0502 61.09C33.1802 60.56 34.0602 59.86 34.9002 58.99C35.8602 58.62 36.8402 58.34 37.8302 58.11C36.9002 58.96 36.0602 59.85 35.4202 61.01C35.0702 61.65 34.8302 63.21 35.9502 63.31C37.1102 63.41 38.0502 62.06 38.6802 61.25C39.1802 60.6 39.4702 59.86 39.6502 59.06C39.7702 58.51 39.6402 58.24 39.4802 57.8C40.6102 57.63 41.7502 57.54 42.9002 57.53C41.6202 58.84 40.5502 60.29 40.0402 62.12C39.7002 63.35 39.2302 65.64 40.9202 66.1C42.2302 66.46 43.4002 64.38 43.8402 63.48C44.3302 62.48 44.3502 61.39 44.5102 60.31C44.6602 59.3 44.7102 58.48 44.3802 57.56C44.7502 57.58 45.1302 57.61 45.5002 57.64C45.4402 57.69 45.3802 57.75 45.3202 57.81C44.9402 58.09 44.7402 58.74 44.8702 59.18C45.1702 60.22 46.5202 60.57 47.2802 59.82C47.6702 59.44 47.8602 58.88 47.7302 58.34C47.6902 58.19 47.6102 58.04 47.5102 57.89C48.1702 58 48.8302 58.13 49.4802 58.29C49.8902 58.39 50.2802 58.47 50.6702 58.54C50.3102 58.78 49.9602 59.07 49.6702 59.38C48.1902 60.35 47.1402 61.83 47.1202 63.74C47.1102 64.68 47.7002 65.2299 48.5702 65.28C49.5802 65.34 50.4202 64.4 50.9802 63.69C51.8302 62.6 52.4202 61.23 53.0802 60.02C53.2502 59.71 53.4102 59.3 53.4102 58.93C56.0702 59.16 58.6202 58.97 61.4602 58.55C61.9002 59.33 62.3302 60.11 62.7502 60.9C62.8702 61.13 62.9702 61.37 63.0802 61.6C63.0602 61.63 63.0402 61.66 63.0202 61.69C62.9402 61.69 62.8602 61.7 62.7702 61.7C62.7102 61.68 62.6402 61.66 62.5802 61.66C62.4102 61.68 62.2502 61.72 62.0802 61.77C60.6202 61.97 59.0302 62.54 57.9402 63.26C56.7302 64.06 54.9002 65.76 55.6702 67.44C56.3202 68.85 58.4302 67.81 59.2602 67.35C60.9802 66.41 62.4802 64.65 63.5802 62.93C63.5902 62.94 63.6002 62.94 63.6202 62.94C64.0102 64.09 64.2902 65.27 64.5602 66.45C64.5202 66.41 64.4902 66.38 64.4502 66.35C64.1502 66.14 63.8702 66.13 63.5302 66.26C63.3602 66.32 63.2802 66.45 63.2602 66.58L63.2502 66.59C62.9102 67.07 63.1302 67.89 63.7602 67.98C64.2302 68.05 64.6102 67.76 64.7702 67.35C64.8902 67.86 65.0202 68.38 65.1602 68.89C64.8302 68.72 64.4202 68.67 64.0602 68.67C63.3102 68.66 62.4502 69 61.9702 69.57C61.4502 70.18 61.9302 70.78 62.5702 70.89C62.9802 70.96 63.3802 70.74 63.7402 70.59C64.2402 70.3699 64.7602 70.22 65.2502 69.98C65.3002 69.95 65.3202 69.91 65.3602 69.87C65.3902 69.86 65.4202 69.86 65.4602 69.85C65.5802 70.22 65.7002 70.58 65.8502 70.94C65.9702 71.23 66.1002 71.51 66.2302 71.79V66.62L66.2002 66.64C65.9502 65.66 65.6802 64.66 65.3402 63.65C65.1202 62.99 64.8602 62.32 64.6002 61.67C65.0302 62.03 65.6702 61.95 65.9902 61.5C66.0202 61.48 66.0502 61.46 66.0802 61.43C66.1402 61.37 66.1902 61.31 66.2302 61.25V59.9C66.2102 59.87 66.1902 59.83 66.1602 59.8C65.7102 59.22 65.0402 59.29 64.5002 59.66C64.2102 59.86 64.0702 60.12 64.0402 60.4C63.7402 59.72 63.4302 59.05 63.0902 58.37C64.1602 58.34 65.2602 58.03 66.2202 57.52V52.85C64.4302 52.91 62.7502 55.23 62.6302 57.04C62.5602 57.03 62.4902 57.04 62.4202 57.08C61.9202 56.14 61.3902 55.2 60.8502 54.27C60.9002 54.29 60.9602 54.31 61.0102 54.33C61.4102 54.46 61.8702 54.32 62.1702 54.04C62.1902 54.03 62.2002 54.03 62.2202 54.02C63.0402 53.64 63.3402 52.62 62.6902 51.95C62.0302 51.27 61.0102 51.42 60.4402 52.12C60.6602 50.71 60.8102 49.26 60.9102 47.8C60.9602 47.77 61.0102 47.74 61.0702 47.72C61.0902 47.72 61.1102 47.73 61.1302 47.73C62.1802 47.68 63.5402 47.64 64.4302 47.01C64.8402 46.72 65.5802 45.97 65.1202 45.41C64.6902 44.88 63.9202 45.09 63.4202 45.37C62.9302 45.64 62.4702 45.85 62.0302 46.19C61.8602 46.33 61.7002 46.48 61.5402 46.63C61.3502 46.68 61.1602 46.74 60.9802 46.81C61.0102 46.16 61.0302 45.5 61.0502 44.84C61.1202 44.89 61.1902 44.94 61.2802 44.96C61.4202 45 61.5702 45.02 61.7102 45.02C61.7302 45.02 61.7402 45.03 61.7602 45.03C62.2202 45.1 62.9002 44.63 63.1402 44.26C63.3802 43.88 63.3002 43.36 62.9602 43.06C62.6002 42.74 61.9902 42.73 61.5602 42.89C61.3802 42.96 61.2102 43.05 61.0702 43.17C61.0702 42.78 61.0602 42.39 61.0602 42C62.4802 42.53 64.6902 42.15 66.2302 41.13V36.77C65.7502 36.73 65.2602 36.79 64.8802 36.88C63.1102 37.3 61.9502 38.66 61.0102 40.15C60.9302 38.07 60.7702 36 60.5702 33.96C60.5802 33.95 60.5802 33.95 60.5902 33.94C62.4802 34.03 64.5202 33.3 66.2302 32.51V28.06C64.0702 28.66 61.5402 30.86 60.3902 32.19C60.2902 31.29 60.1802 30.39 60.0602 29.51C60.0502 29.45 60.0402 29.4 60.0402 29.34C60.2002 29.47 60.4202 29.56 60.6502 29.6C60.8402 29.65 61.0502 29.66 61.2402 29.61C61.3302 29.59 61.4202 29.57 61.4902 29.54C61.5502 29.51 61.6002 29.47 61.6502 29.43C62.1402 29.15 62.3202 28.67 62.1302 28.05C61.7802 26.92 60.3202 27.27 59.8602 28.12C59.7802 27.59 59.7002 27.06 59.6102 26.53C61.8502 26.33 63.9102 25.64 65.8002 24.41C65.8602 24.33 66.0102 24.22 66.1702 24.09Z" />
    <path d="M64.5903 72.7899C64.5603 72.9999 64.6003 73.1699 64.6603 73.3099C64.6903 73.4699 64.7503 73.6299 64.8503 73.7799C65.1003 74.1599 65.7403 74.3899 66.1603 74.1599C66.1603 74.1599 66.1703 74.1599 66.1703 74.1499V72.0499C65.5503 71.7799 64.6903 71.9999 64.5903 72.7899Z" />
    <path d="M62.2202 77.09H66.1602V75.25C64.9502 75.32 63.8502 75.51 62.7502 76.27C62.4502 76.48 62.2802 76.77 62.2202 77.09Z" />
  </svg>
)

export { BranchIcon }
