<?php

namespace Modules\Installer\Helpers;

use Modules\Core\Entities\Installer;

class InstalledFileManager
{
    /**
     * Create installed file.
     *
     * @return int
     */
    public function create()
    {
        $installedLogFile = storage_path('installed');

        $dateStamp = date('Y/m/d h:i:sa');

        if (! file_exists($installedLogFile)) {
            $message = trans('installer_messages.installed.success_log_message').$dateStamp."\n";

            file_put_contents($installedLogFile, $message);
        } else {
            $message = trans('installer_messages.updater.log.success_message').$dateStamp;

            file_put_contents($installedLogFile, $message.PHP_EOL, FILE_APPEND | LOCK_EX);
        }

        $installer = Installer::first();
        if (!empty($installer)){
            $installedFile = file_exists(storage_path('installed'));
            if (!empty($installedFile)){
                $installer->is_installed = 1;
                $installer->update();
            }
        } else {
            $installedFile = file_exists(storage_path('installed'));
            if (!empty($installedFile)){
                $installerNew = new Installer();
                $installerNew->is_installed = 1;
                $installerNew->save();
            }
        }

        return $message;
    }

    /**
     * Update installed file.
     *
     * @return int
     */
    public function update()
    {
        return $this->create();
    }
}
