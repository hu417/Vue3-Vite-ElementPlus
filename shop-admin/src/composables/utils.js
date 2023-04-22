// 引入通知组件
import { ElNotification } from 'element-plus'


// 通知设置
export function toast(message,type,dangerouslyUseHTMLString=false) {
    ElNotification({
        // title: 'Success',
        message: message,
        type: type,
        duration: 1000,  // 停留时间
        position: 'top-right',  // 弹出位置，
        dangerouslyUseHTMLString: dangerouslyUseHTMLString // 是否将 message 属性作为 HTML 片段处理	
    })
}