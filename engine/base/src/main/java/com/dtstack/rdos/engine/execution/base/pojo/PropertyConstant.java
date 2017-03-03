package com.dtstack.rdos.engine.execution.base.pojo;

/**
 * property key 常量定义
 * Date: 2017/3/1
 * Company: www.dtstack.com
 * @ahthor xuchao
 */

public class PropertyConstant {

    /*************fink check point**********************/
    public static final String FLINK_CHECKPOINT_INTERVAL = "flinkCheckpointInterval";

    public static final String FLINK_CHECKPOINT_MODE = "flinkCheckpointMode";

    public static final String FLINK_CHECKPOINT_TIMEOUT = "flinkCheckpointTimeout";

    public static final String FLINK_MAXCONCURRENTCHECKPOINTS = "maxConcurrentCheckpoints";

    public static final String FLINK_CHECKPOINT_CLEANUPMODE = "flinkCheckpointCleanupmode";

    public static final String FLINK_CHECKPOINT_DATAURI = "flinkCheckpointDatauri";

    /**************flink client init*********************/

    public static final String FLINK_JOBMGR_HOST = "flinkJobMgrHost";

    public static final String FLINK_JOBMGR_RPC_PORT = "flinkJobMgrRpcPort";

    public static final String FLINK_ZKNAMESPACE = "flinkJobMgrZknamespace";

    public static final String FLINK_ZK_ROOT = "flinkZkRoot";

    public static final String FLINK_ZK_CLUSTERID = "flinkZkClusterId";
}
