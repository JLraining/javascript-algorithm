import React, { useState } from 'react';

// Modal使用
const App = () => {
    const [ModalVisible, setModalVisible] = useState(false);
    return (
        <Modal visible={ModalVisible} onClose={() => {setModalVisible(false)}}>
            <div className="dialog">
                <span onClick={() => setModalVisible(false)} className="closeBtn">x</span>
                <div>模态框内容</div>
            </div>
        </Modal>
    )

};


// Modal实现
const Modal = (props) => {
    const { visible, onClose, children } = props;
    function handleClick(event) {
        // 点击蒙层本身时关闭模态框，点击模态框的内容时不关闭
        // currentTarget是事件的监听者
        // target是事件的真正发出者
        if (event.target === event.currentTarget) {
            closeModal();
        }
    };
    
    // 使用creatPortal渲染到document.body
    const modal = createPortal(
        <div className="modal" onClick={handleClick}>
            {children}
        </div>,
        document.body
    );

    // 阻止背景滚动 如果body内容太长出现滚动时，滚动鼠标就会发现，模态框后边的背景也在滚动的情况
    // 在模态框打开时，我们给 body 添加一个 overflow: hidden 

    // 在第一次渲染时取 body 原始的 overflow 值
    const bodyOverflow = useRef(window.getComputedStyle(document.body).overflow);

    useEffect(() => { // 根据 visible 来动态修改 body 的 overflow 值
        if (visible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = bodyOverflow.current;
        }
    }, [visible]);


    useEffect(() => {
        // 组件销毁时恢复 body 的 overflow 值
        return () => {
            document.body.style.overflow = bodyOverflow.current;
        }
    }, []);


    return visible ? modal : null;
}

export default React.memo(Modal);
