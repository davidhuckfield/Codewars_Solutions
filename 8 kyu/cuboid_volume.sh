#!/bin/bash
length=$1
width=$2
height=$3

volume=$(echo "$length * $width * $height" | bc -l)
echo $volume