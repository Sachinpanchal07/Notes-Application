export let homeStyling = `<style>
            body { 
                background: #f4f7f6; 
                font-family: sans-serif; 
                display: flex; 
                justify-content: center; 
                align-items: center; 
                height: 100vh; 
                margin: 0; 
            }
            .card { 
                background: white; 
                padding: 40px; 
                border-radius: 12px; 
                box-shadow: 0 4px 15px rgba(0,0,0,0.1); 
                text-align: center; 
            }
            h1 { color: #333; margin-bottom: 30px; }
            button { 
                padding: 12px 25px; 
                margin: 10px; 
                border: none; 
                border-radius: 6px; 
                cursor: pointer; 
                font-weight: bold; 
                transition: 0.3s; 
            }
            .btn-add { background: #28a745; color: white; }
            .btn-show { background: #007bff; color: white; }
            button:hover { opacity: 0.8; transform: scale(1.05); }
        </style>`


export let showNotesStyling = `<style>
        body { background: #f4f7f6; font-family: 'Segoe UI', sans-serif; padding: 20px; }
        .nav-container { margin-bottom: 20px; display: flex; gap: 10px; justify-content: center; }
        .note-card { 
            background: white; 
            border: 1px solid #eee; 
            padding: 20px; 
            margin: 15px auto; 
            border-radius: 10px; 
            max-width: 600px; 
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            transition: transform 0.2s, box-shadow 0.2s;
        }
        .note-card:hover { 
            transform: translateY(-3px); 
            box-shadow: 0 5px 15px rgba(0,0,0,0.1); 
        }
        h3 { margin-top: 0; color: #333; border-bottom: 2px solid #007bff; display: inline-block; padding-bottom: 5px; }
        p { color: #666; line-height: 1.5; margin: 15px 0; }
        .btn { 
            padding: 8px 16px; 
            border: none; 
            border-radius: 5px; 
            cursor: pointer; 
            font-weight: 600; 
            text-decoration: none; 
            display: inline-block;
            font-size: 14px;
        }
        .btn-home { background: #6c757d; color: white; }
        .btn-sort { background: #fff; border: 1px solid #007bff; color: #007bff; }
        .btn-sort:hover { background: #007bff; color: white; }
        .btn-edit { background: #ffc107; color: #000; margin-right: 5px; }
        .btn-delete { background: #dc3545; color: white; }
        .actions { margin-top: 15px; border-top: 1px solid #eee; padding-top: 10px; }
    </style>`


export let editFormStyling = `
<style>
        body { 
            background: #f4f7f6; 
            font-family: 'Segoe UI', sans-serif; 
            display: flex; 
            justify-content: center; 
            padding-top: 50px; 
            margin: 0; 
        }
        .edit-container { 
            background: white; 
            padding: 30px; 
            border-radius: 12px; 
            box-shadow: 0 8px 20px rgba(0,0,0,0.1); 
            width: 100%; 
            max-width: 450px; 
            border-top: 5px solid #f59e0b; /* Amber/Orange accent */
        }
        h2 { color: #333; margin-bottom: 20px; font-size: 1.5rem; }
        label { display: block; margin-bottom: 5px; font-weight: 600; color: #666; }
        
        input[type="text"], textarea { 
            width: 100%; 
            padding: 12px; 
            margin-bottom: 20px; 
            border: 1px solid #ddd; 
            border-radius: 8px; 
            font-size: 15px; 
            outline: none; 
            transition: 0.3s;
            box-sizing: border-box; 
        }
        input:focus, textarea:focus { border-color: #f59e0b; box-shadow: 0 0 5px rgba(245, 158, 11, 0.2); }
        
        .btn-save { 
            background: #f59e0b; 
            color: white; 
            width: 100%; 
            padding: 12px; 
            border: none; 
            border-radius: 8px; 
            font-weight: bold; 
            cursor: pointer; 
            transition: 0.3s; 
        }
        .btn-save:hover { background: #d97706; }
        
        .btn-back { 
            display: inline-block; 
            margin-top: 15px; 
            color: #666; 
            text-decoration: none; 
            font-size: 14px; 
        }
        .btn-back:hover { text-decoration: underline; }
    </style>`