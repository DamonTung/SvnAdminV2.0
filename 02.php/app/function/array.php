<?php
/*
 * @Author: witersen
 * @Date: 2022-04-24 23:37:05
 * @LastEditors: witersen
 * @LastEditTime: 2022-05-06 21:28:38
 * @Description: QQ:1801168257
 */

/**
 * 对数据每项键值进行trim操作 
 */
function funArrayValueTrim(&$value, $key)
{
    $value = trim($value);
}

/**
 * 去除数组中的空字符串
 */
function funArrayValueFilter($value)
{
    return trim($value) != '';
}

/**
 * 获取数组中每个键值开始的空格数
 */
function funArrayGetStrSpaceCount($string)
{
    for ($i = 0; $i < strlen($string); $i++) {
        if ($string[$i] != ' ') {
            break;
        }
    }
    return $i;
}

/**
 * 根据数组中每个键值结尾是否包含 / 判断键值是否为目录或文件
 */
function funArrayIsStrFolder($string)
{
    if (substr($string, strlen($string) - 1) == '/') {
        return '1';
    } else {
        return '0';
    }
}

/**
 * 对数据每项键值进行去除 #disabled# 操作
 */
function funArrayValueEnabled(&$value, $key)
{
    $REG_SVN_USER_DISABLED = '#disabled#';

    if (substr($value, 0, strlen($REG_SVN_USER_DISABLED)) == $REG_SVN_USER_DISABLED) {
        $value = substr($value, strlen($REG_SVN_USER_DISABLED));
    }
}

/**
 * 检查表单的参数
 */
function funCheckForm($checkedArray, $columns)
{
    //检查数组本身是否合法
    if (empty($checkedArray) || !isset($checkedArray)) {
        return message(200, 0, '参数不合法', [
            'column' => ''
        ]);
    }
    foreach ($columns as $key => $value) {
        //检查数组中是否包含指定的变量
        if (!array_key_exists($key, $checkedArray)) {
            return message(200, 0, '缺少参数', [
                'column' => $key
            ]);
        }
        //检查变量类型是否正确
        if ($value['type'] != gettype($checkedArray[$key])) {
            return message(200, 0, '参数类型错误', [
                'column' =>  sprintf('参数[%s]-需要[%s]-实际为[%s]', $key, $value['type'], gettype($checkedArray[$key]))
            ]);
        }
        //检查是否可以为空
        if (isset($value['notNull']) && $value['notNull']) {
            if ($value['type'] == 'integer') {
            } else if (empty($checkedArray[$key])) {
                return message(200, 0, '参数值不能为空', [
                    'column' => $key
                ]);
            }
        }
    }

    return message();
}
