// 引入通知组件
import { ElNotification,ElMessageBox } from 'element-plus'

// 引入nprogress
import nProgress from 'nprogress'

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

// 消息弹出提示框
export function showModal(content = "提示内容",type = "warning",title = "") {
    return ElMessageBox.confirm(
        content,
        title,
        {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type: type,
          draggable: true,  // 开启拖拽弹窗能力
        }
    )

}


// 显示全屏loading
export function showFullLoading() {
    nProgress.start();

}

// 隐藏全屏loading
export function hideFullLoading(){
    nProgress.done()
}






