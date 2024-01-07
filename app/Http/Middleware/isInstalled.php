<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;
use Modules\Core\Entities\Installer;

class isInstalled
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $installedFile = file_exists(storage_path('installed'));

        $installerTable = Schema::hasTable('psx_installer');

        if ($installerTable){
            $isInstalled = Installer::first() ? Installer::first()->is_installed : '';
            if (!$installedFile && empty($isInstalled)){
                // dd("here");
                return redirect()->route('LaravelInstaller::welcome');
            }
        }
        
        return $next($request);
    }
}
