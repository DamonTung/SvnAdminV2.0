<?php
/*
 * @Author: witersen
 * @Date: 2022-04-24 23:37:06
 * @LastEditors: witersen
 * @LastEditTime: 2022-05-01 00:33:53
 * @Description: QQ:1801168257
 */

/**
 * 修改该配置文件后需要重启守护进程程序(svnadmind.php)
 */

/**
 * 程序与守护进程通信的本地地址
 * 不要修改
 */
define('IPC_ADDRESS', '127.0.0.1');

/**
 * 程序与守护进程通信的本地端口
 * 如与现有业务端口冲突 请自行修改
 */
define('IPC_PORT', 6666);

/**
 * socket_read 和 socket_write 的最大传输字节
 * 如果没有需要 8192 字节已经极大的满足需求
 */
define('SOCKET_READ_LENGTH', 8192);
define('SOCKET_WRITE_LENGTH', 8192);

/**
 * socket 处理并发的最大队列长度
 */
define('SOCKET_LISTEN_BACKLOG', 2000);

/**
 * 当前程序支持的最低PHP版本
 */
define('Required_PHP_VERSION', '5.4.45');

/**
 * CLI程序需要解除禁止的函数
 */
define('CLI_NEEDED_FUNCTION', serialize([
    'pcntl_fork',
    'pcntl_signal',
    'pcntl_wait',
    'shell_exec'
]));

/**
 * FPM模式需要解除禁止的函数
 */
define('FPM_NEEDED_FUNCTION', serialize([]));
