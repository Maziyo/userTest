import fs from "fs";
import path from "path";

export default function handler(req, res){
    if(req.method === "POST"){
        const filePath = path.resolve("./utils/dataSave.json"); //JSON 파일 위치
        const newData = { memory: req.body.text }

        let data = [];
        if(fs.existsSync(filePath)){
            data  = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        }

        data.push(newData);
        fs.writeFileSync(filePath, JSON.stringify(data, null,2), "utf-8");

        return res.status(200).json({ success: true, data});
    }

    res.status(405).json({ error: "Method not allowed" });
}