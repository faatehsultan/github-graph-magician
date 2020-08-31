# GH GRAPH MAGICIAN
# Website: https://faatehsultan.github.io/github-graph-magician
# Version: 1.1.0
# Developed by: Syed Faateh Sultan Kazmi
# -------------------------------------------------------------
# Disclaimer: The developer do not promote or recommend taking any 
# kind of unfair advantage using this app. User will be responsible 
# for taking any unfair advantage of this app


#!/bin/bash

#Starting
echo "        GITHUB GRAPH MAGICIAN"
echo "        ---------------------"
echo "Developed by: Syed Faateh Sultan Kazmi"
echo "Visit: https://faatehsultan.github.io/github-graph-magician"
echo "Disclaimer: The developer do not promote or recommend taking any kind of unfair advantage using this app. User will be responsible for taking any unfair advantage of this app"
echo "APP STARTED!"

#Extracting intensity from config file
cp config.json files
cd files
node prep.js
input="temp.txt"
read line < $input

#Now Run the Github Graph Magician
i="0"
while [ $i -lt $line ]
do
    echo "Shade: "$(($i + 1))
    node gh_graph_magician.js
    i=$[$i+1]
done

# Disclaimer: The developer do not promote or recommend taking any 
# kind of unfair advantage using this app. User will be responsible 
# for taking any unfair advantage of this app
