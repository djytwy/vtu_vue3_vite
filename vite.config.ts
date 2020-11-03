/*
 * @Date: 2020-11-02 15:55:10
 * @LastEditTime: 2020-11-02 16:01:54
 * @FilePath: /myVue3/vite.config.ts
 * @Author: twy
 * @LastEditors: twy
 */
import { SharedConfig } from "vite";
import path from "path";

const pathResolve = (pathStr: string) => {
    return path.resolve(__dirname, pathStr)
}

const config: SharedConfig = {
    alias: {
        '/@/': pathResolve('.src')
    }
}