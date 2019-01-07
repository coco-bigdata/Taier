package com.dtstack.rdos.engine.execution.flink150;

import com.google.common.base.Strings;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.math.NumberUtils;

import java.util.Map;

/**
 *
 * @author sishu.yss
 *
 */
public class FlinkConfig {

    private static final String DEFAULT_FLINK_PLUGIN_ROOT = "/opt/dtstack/flinkplugin";

    private static final String DEFAULT_REMOTE_PLUGIN_ROOT_DIR = "/opt/dtstack/flinkplugin";

    private static final String DEFAULT_FLINK_ZK_NAMESPACE = "/flink150";

    private static final String DEFAULT_JAR_TMP_DIR = "../tmp150";

    private static final String DEFAULT_FLINK_HIGH_AVAILABILITY_STORAGE_DIR = "%s/flink150/ha";

    private static final String HDFS_FLAG = "hdfs";

    private String typeName;

    private String flinkZkAddress;

    private String flinkZkNamespace;

    private String flinkClusterId;

    private String flinkJobMgrUrl;

    private String flinkHighAvailabilityStorageDir;

    private String jarTmpDir;

    private String flinkPluginRoot;

    private String monitorAddress;

    private String remotePluginRootDir;

    private String clusterMode; // 集群运行模式: standalone or yarn

    private String queue;

    private Map<String, Object> hadoopConf;

    private Map<String, Object> yarnConf;

    private String flinkJarPath;

    private String elasticCapacity;

    private String yarnAccepterTaskNumber;

    private String flinkJobHistory;

    private String jobmanagerArchiveFsDir;

    private boolean isSecurity;

    private String flinkPrincipal;

    private String flinkKeytabPath;

    private String flinkKrb5ConfPath;

    private String zkPrincipal;

    private String zkKeytabPath;

    private String zkLoginName;

    public String getZkLoginName() {
        return zkLoginName;
    }

    public void setZkLoginName(String zkLoginName) {
        this.zkLoginName = zkLoginName;
    }

    public String getZkKeytabPath() {
        return zkKeytabPath;
    }

    public void setZkKeytabPath(String zkKeytabPath) {
        this.zkKeytabPath = zkKeytabPath;
    }

    public String getZkPrincipal() {
        return zkPrincipal;
    }

    public void setZkPrincipal(String zkPrincipal) {
        this.zkPrincipal = zkPrincipal;
    }

    public boolean isSecurity() {
        return isSecurity;
    }

    public void setSecurity(boolean isSecurity) {
        this.isSecurity = isSecurity;
    }

    public String getFlinkPrincipal() {
        return flinkPrincipal;
    }

    public void setFlinkPrincipal(String flinkPrincipal) {
        this.flinkPrincipal = flinkPrincipal;
    }

    public String getFlinkKeytabPath() {
        return flinkKeytabPath;
    }

    public void setFlinkKeytabPath(String flinkKeytabPath) {
        this.flinkKeytabPath = flinkKeytabPath;
    }

    public String getFlinkZkAddress() {
        return flinkZkAddress;
    }

    public void setFlinkZkAddress(String flinkZkAddress) {
        this.flinkZkAddress = flinkZkAddress;
    }

    public String getFlinkZkNamespace() {
        if (Strings.isNullOrEmpty(flinkZkNamespace)) {
            return DEFAULT_FLINK_ZK_NAMESPACE;
        }

        return flinkZkNamespace;
    }

    public void setFlinkZkNamespace(String flinkZkNamespace) {
        this.flinkZkNamespace = flinkZkNamespace;
    }

    public String getFlinkClusterId() {
        return flinkClusterId;
    }

    public void setFlinkClusterId(String flinkClusterId) {
        this.flinkClusterId = flinkClusterId;
    }

    public String getJarTmpDir() {
        if (Strings.isNullOrEmpty(jarTmpDir)) {
            return DEFAULT_JAR_TMP_DIR;
        }

        return jarTmpDir;
    }

    public void setJarTmpDir(String jarTmpDir) {
        this.jarTmpDir = jarTmpDir;
    }

    public String getFlinkJobMgrUrl() {
        return flinkJobMgrUrl;
    }

    public void setFlinkJobMgrUrl(String flinkJobMgrUrl) {
        this.flinkJobMgrUrl = flinkJobMgrUrl;
    }

    public String getFlinkHighAvailabilityStorageDir() {
        return flinkHighAvailabilityStorageDir;
    }

    public void setFlinkHighAvailabilityStorageDir(
            String flinkHighAvailabilityStorageDir) {
        this.flinkHighAvailabilityStorageDir = flinkHighAvailabilityStorageDir;
    }

    public void setDefaultFlinkHighAvailabilityStorageDir(String defaultFS) {
        String defaultVal = String.format(DEFAULT_FLINK_HIGH_AVAILABILITY_STORAGE_DIR, defaultFS);
        this.flinkHighAvailabilityStorageDir = defaultVal;
    }

    public void updateFlinkHighAvailabilityStorageDir(String defaultFS){
        if(Strings.isNullOrEmpty(flinkHighAvailabilityStorageDir)){
            return;
        }

        if(flinkHighAvailabilityStorageDir.trim().startsWith(HDFS_FLAG)){
            return;
        }

        flinkHighAvailabilityStorageDir = flinkHighAvailabilityStorageDir.trim();
        flinkHighAvailabilityStorageDir = defaultFS + flinkHighAvailabilityStorageDir;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }

    public String getFlinkPluginRoot() {
        if(Strings.isNullOrEmpty(flinkPluginRoot)){
            return DEFAULT_FLINK_PLUGIN_ROOT;
        }

        return flinkPluginRoot;
    }

    public void setFlinkPluginRoot(String flinkPluginRoot) {
        this.flinkPluginRoot = flinkPluginRoot;
    }

    public String getMonitorAddress() {
        return monitorAddress;
    }

    public void setMonitorAddress(String monitorAddress) {
        this.monitorAddress = monitorAddress;
    }

    public String getRemotePluginRootDir() {

        if(Strings.isNullOrEmpty(remotePluginRootDir)){
            return DEFAULT_REMOTE_PLUGIN_ROOT_DIR;
        }

        return remotePluginRootDir;
    }

    public void setRemotePluginRootDir(String remotePluginRootDir) {
        this.remotePluginRootDir = remotePluginRootDir;
    }

    public String getClusterMode() {
        return clusterMode;
    }

    public void setClusterMode(String clusterMode) {
        this.clusterMode = clusterMode;
    }

    public Map<String, Object> getHadoopConf() {
        return hadoopConf;
    }

    public void setHadoopConf(Map<String, Object> hadoopConf) {
        this.hadoopConf = hadoopConf;
    }

    public Map<String, Object> getYarnConf() {
        return yarnConf;
    }

    public void setYarnConf(Map<String, Object> yarnConf) {
        this.yarnConf = yarnConf;
    }

    public String getQueue() {
        return StringUtils.isBlank(queue) ? "default" : queue;
    }

    public void setQueue(String queue) {
        this.queue = queue;
    }

    public String getFlinkJarPath() {
        return flinkJarPath;
    }

    public void setFlinkJarPath(String flinkJarPath) {
        this.flinkJarPath = flinkJarPath;
    }

    public boolean getElasticCapacity() {
        return StringUtils.isBlank(elasticCapacity) ? true: Boolean.valueOf(elasticCapacity);
    }

    public void setElasticCapacity(String elasticCapacity) {
        this.elasticCapacity = elasticCapacity;
    }

    public int getYarnAccepterTaskNumber() {
        return StringUtils.isBlank(yarnAccepterTaskNumber) ? 1: NumberUtils.toInt(yarnAccepterTaskNumber,2);
    }

    public void setYarnAccepterTaskNumber(String yarnAccepterTaskNumber) {
        this.yarnAccepterTaskNumber = yarnAccepterTaskNumber;
    }

    public String getFlinkJobHistory() {
        return flinkJobHistory;
    }

    public void setFlinkJobHistory(String flinkJobHistory) {
        this.flinkJobHistory = flinkJobHistory;
    }

    public String getJobmanagerArchiveFsDir() {
        return jobmanagerArchiveFsDir;
    }

    public void setJobmanagerArchiveFsDir(String jobmanagerArchiveFsDir) {
        this.jobmanagerArchiveFsDir = jobmanagerArchiveFsDir;
    }

    public String getFlinkKrb5ConfPath() {
        return flinkKrb5ConfPath;
    }

    public void setFlinkKrb5ConfPath(String flinkKrb5ConfPath) {
        this.flinkKrb5ConfPath = flinkKrb5ConfPath;
    }
}
